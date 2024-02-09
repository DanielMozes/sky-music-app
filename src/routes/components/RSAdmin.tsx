import { createSignal } from 'solid-js';
import RandomBackgroundDots from "./RandomBackgroundDots";

import BasicAuth from "./BasicAuth";
import axios from 'axios';

import { getDatabase, ref, push } from "firebase/database";

function RightSection() {
  const authenticated = BasicAuth();

  const [files, setFiles] = createSignal([null, null, null, null]);
  
  let artistPageInput;
  let genreInput;
  let typeInput;
  let moodInput;
  let licenseInput;

  const handleFileChange = (event, index) => {
    const selectedFile = event.target.files[0];
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles[index] = selectedFile;
      return newFiles;
    });
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

  const areAllFilesSelected = () => {
    return files().every((file) => file !== null);
  };

  const music_data = [];
  let currentFilename;

  const handleUpload = async () => {
    if (areAllFilesSelected()) {
      for (let index = 0; index < files().length; index++) {
        const currentFile = files()[index];

        if (currentFile !== null) {
          currentFilename = currentFile.name;
          const formData = new FormData();
          formData.append('file', currentFile);

          try {
            const response = await axios.post(import.meta.env.VITE_S5_URL + '/upload?auth_token=' + import.meta.env.VITE_S5_AUTH_TOKEN, formData, {
              headers: {
                'Content-Type': 'audio/ogg',
              },
            });

            console.log(`cURL response for file${index + 1}:`, response.data["cid"]);
            music_data.push(response.data["cid"]);
          } catch (error) {
            console.error(`Error for file${index + 1}:`, error);
          }
        }
      }

      const separator = " - ";
      const parts = currentFilename.split(separator);
      const artist = parts[0];
      const parts1 = parts[1];
      const title = parts1.split('-')[0];

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
  
      push(ref(db), postData);
    } else {
      console.warn('Not all files selected.');
    }
  };
    return (
    <div id="rightSection" class="bg-body-tertiary border rounded-3" style="background-color: #212529 !important;">
      <div class="px-4 py-5 my-5 text-center">
        <RandomBackgroundDots />
        <h1 class="display-5 fw-bold text-white">Admin</h1>
        <div class="col-lg-6 mx-auto">
          {authenticated() ? (
              <div class="mb-3">
                <label class="form-label text-white">Upload files to encode</label>
                <br />
                <label for="artist_page" class="form-label text-white">Artist page</label>
                <input type="text" class="form-control" id="artist_page" onInput={handleArtistPageChange} />
                <label for="genre" class="form-label text-white">Genre</label>
                <input type="text" class="form-control" id="genre" onInput={handleGenreChange} />
                <label for="type" class="form-label text-white">Type</label>
                <input type="text" class="form-control" id="type" onInput={handleTypeChange} />
                <label for="mood" class="form-label text-white">Mood</label>
                <input type="text" class="form-control" id="mood" onInput={handleMoodChange} />
                <label for="license" class="form-label text-white">License</label>
                <input type="text" class="form-control" id="license" onInput={handleLicenseChange} />
                <label for="file320" class="form-label text-white">320</label>
                <input class="form-control" type="file" id="file320" onChange={(e) => handleFileChange(e, 0)} />
                <label for="file160" class="form-label text-white">160</label>
                <input class="form-control" type="file" id="file160" onChange={(e) => handleFileChange(e, 1)} />
                <label for="file80" class="form-label text-white">80</label>
                <input class="form-control" type="file" id="file80" onChange={(e) => handleFileChange(e, 2)} />
                <label for="file40" class="form-label text-white">40</label>
                <input class="form-control" type="file" id="file40" onChange={(e) => handleFileChange(e, 3)} />
                <br />
                <button type="submit" class="btn btn-primary" onClick={handleUpload}>Encode file</button>
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