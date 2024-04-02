import { createSignal } from 'solid-js';
import RandomBackgroundDots from "./RandomBackgroundDots";

import BasicAuth from "./BasicAuth";
import axios from 'axios';

import { getDatabase, ref, push } from "firebase/database";

function RightSection() {
  const authenticated = BasicAuth();

  const [files, setFiles] = createSignal(null);
  const [isUploading, setIsUploading] = createSignal(false);
  
  let artistPageInput;
  let genreInput;
  let typeInput;
  let moodInput;
  let licenseInput;

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

  const [filesData, setFilesData] = createSignal([]);

  const handleUpload = async () => {
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
          artist: artist, 
          title: title, 
          artist_page: artistPageInput, 
          genre: genreInput, 
          type: typeInput, 
          mood: moodInput, 
          license: licenseInput
        };

        push(ref(db, 'uploads'), postData);
      } catch (error) {
        console.error("Error downloading files:", error);
      }

    } catch (error) {
      console.error(`Error for convert:`, error);
    }
    setIsUploading(false);
  };
    return (
    <div id="rightSection" class="bg-body-tertiary border rounded-3" style="background-color: #212529 !important; margin-left: calc(20% + 0.4rem);">
      <div class="px-4 py-5 my-5 text-center">
        <RandomBackgroundDots />
        <h1 class="display-5 fw-bold text-white">Admin</h1>
        <div class="col-lg-6 mx-auto">
          {authenticated() ? (
              <div class="mb-3">
                <label class="form-label text-white">Upload files to encode</label>
                <br />
                <label for="artist_page" class="form-label text-white">Artist page</label>
                <input type="text" class="form-control" id="artist_page" onInput={handleArtistPageChange} disabled={isUploading()} />
                <label for="genre" class="form-label text-white">Genre</label>
                <input type="text" class="form-control" id="genre" onInput={handleGenreChange} disabled={isUploading()} />
                <label for="type" class="form-label text-white">Type</label>
                <input type="text" class="form-control" id="type" onInput={handleTypeChange} disabled={isUploading()} />
                <label for="mood" class="form-label text-white">Mood</label>
                <input type="text" class="form-control" id="mood" onInput={handleMoodChange} disabled={isUploading()} />
                <label for="license" class="form-label text-white">License</label>
                <input type="text" class="form-control" id="license" onInput={handleLicenseChange} disabled={isUploading()} />
                <label for="file" class="form-label text-white">File</label>
                <input class="form-control" type="file" id="file" onChange={handleFileChange} disabled={isUploading()} />
                <br />
                <button type="submit" class="btn btn-primary" onClick={handleUpload} disabled={isUploading()}>Encode file</button>
              </div>
          ) : (
            <p class="lead mb-4 text-white">Password required</p>
          )}
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          </div>
        </div>
      </div>
    </div>
    );
}

export default RightSection;