import { createSignal } from 'solid-js';
import RandomBackgroundDots from "./RandomBackgroundDots";

import axios from 'axios';

import { getDatabase, ref, push } from "firebase/database";

function RightSection() {
  const [files, setFiles] = createSignal("");
  const [isUploading, setIsUploading] = createSignal(false);
  
  let artistPageInput = "";
  let genreInput = "";
  let typeInput = "";
  let moodInput = "";
  let licenseInput = "";

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFiles(file);
    }
  };

  const handleArtistPageChange = (event) => {
    artistPageInput = event.target.value;
  };
  
  const handleGenreChange = (event) => {
    genreInput = event.target.value;
  };
  
  const handleTypeChange = (event) => {
    typeInput = event.target.value;
  };
  
  const handleMoodChange = (event) => {
    moodInput = event.target.value;
  };
  
  const handleLicenseChange = (event) => {
    licenseInput = event.target.value;
  };

  const music_data = [];

  const handleUpload = async () => {
    const allInputsNotEmpty = [artistPageInput, genreInput, typeInput, moodInput, licenseInput, files()].every(input => input !== "");

    if(allInputsNotEmpty) {
      setIsUploading(true);
      // Converting
      try {
        const formData = new FormData();
        formData.append('music', files());
        const response = await axios.post(import.meta.env.VITE_API_URL + '/convert', formData, {
          headers: {
            'Authorization': 'Bearer ' + import.meta.env.VITE_S5_AUTH_TOKEN,
          },
        });
  
        console.log(`Convert response:`, response.data);
  
        // Uploading
        const nameWithoutExtension = files().name.replace(/\.[^/.]+$/, "");
        const urls = [
          nameWithoutExtension + '-320.opus',
          nameWithoutExtension + '-160.opus',
          nameWithoutExtension + '-80.opus',
          nameWithoutExtension + '-40.opus'
        ];
        try {
          for (let index = 0; index < urls.length; index++) {
            const fileName = urls[index];
            console.log("fileName: " + fileName);
  
            if (fileName !== null) {
              try {
                const response = await axios.post(import.meta.env.VITE_API_URL + '/upload?auth_token=' + import.meta.env.VITE_S5_AUTH_TOKEN, { fileName }, {
                  headers: {
                    'Authorization': 'Bearer ' + import.meta.env.VITE_S5_AUTH_TOKEN,
                    'Content-Type': 'application/json',
                  },
                });
  
                console.log(`cURL response for file${index + 1}:`, response.data["cid"]);
                music_data[index] = response.data["cid"];
              } catch (error) {
                console.error(`Error for file${index + 1}:`, error);
              }
            }
          }
  
          // Add to database
          const separator = " - ";
          const parts = nameWithoutExtension.split(separator);
          const artist = parts[0];
          const title = parts[1];
  
          const db = getDatabase();
  
          const postData = {
            40: music_data[3], 
            80: music_data[2], 
            160: music_data[1], 
            320: music_data[0], 
            artist: artist[0].toUpperCase() + artist.slice(1),
            title: title[0].toUpperCase() + title.slice(1), 
            artist_page: artistPageInput, 
            genre: genreInput, 
            type: typeInput[0].toUpperCase() + typeInput.slice(1), 
            mood: moodInput[0].toUpperCase() + moodInput.slice(1), 
            license: licenseInput
          };
  
          push(ref(db, 'uploads'), postData);
        } catch (error) {
          console.error("Error downloading files:", error);
        }
  
      } catch (error) {
        console.error(`Error for convert:`, error);
      }

      document.getElementById('genre').selectedIndex = 0;
      document.getElementById('type').value = "";
      document.getElementById('mood').value = "";
      document.getElementById('license').value = "";
      document.getElementById('file').value = "";

      setIsUploading(false);
    } else {
      alert("All fields are required!")
    }
  };
    return (
    <div id="rightSection" class="bg-body-tertiary border rounded-3" style="background-color: #212529 !important; margin-left: calc(20% + 0.4rem);">
      <div class="px-4 py-5 my-5 text-center">
        <RandomBackgroundDots />
        <h1 class="display-5 fw-bold text-white">Upload music</h1>
        <div class="col-lg-6 mx-auto">
          <div class="mb-3">
            <label for="artist_page" class="form-label text-white">Artist page</label>
            <input type="text" class="form-control" id="artist_page" onInput={handleArtistPageChange} disabled={isUploading()} />
            <label for="genre" class="form-label text-white">Genre</label>
            <select name="genre" class="form-select" id="genre" onChange={handleGenreChange} disabled={isUploading()} >
              <option selected>Select genre</option>
              <option value="Pop">Pop</option>
              <option value="Rock">Rock</option>
              <option value="Dance">Dance</option>
              <option value="Rap">Rap</option>
              <option value="Jazz">Jazz</option>
              <option value="Classic">Classic</option>
            </select>
            <label for="type" class="form-label text-white">Type</label>
            <input type="text" class="form-control" id="type" onInput={handleTypeChange} disabled={isUploading()} />
            <label for="mood" class="form-label text-white">Mood</label>
            <input type="text" class="form-control" id="mood" onInput={handleMoodChange} disabled={isUploading()} />
            <label for="license" class="form-label text-white">License</label>
            <input type="text" class="form-control" id="license" onInput={handleLicenseChange} disabled={isUploading()} />
            <label for="file" class="form-label text-white">File</label>
            <input class="form-control" type="file" id="file" onChange={handleFileChange} disabled={isUploading()} />
            <br />
            <button type="submit" class="btn btn-primary" onClick={handleUpload} disabled={isUploading()}>{isUploading() ? 'Uploading in progress' : 'Upload music'}</button>
          </div>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          </div>
        </div>
      </div>
    </div>
    );
}

export default RightSection;