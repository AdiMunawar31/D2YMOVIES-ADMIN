import { useState } from 'react';
import { Link } from 'react-router-dom';
import storage from '../../firebase';
import './newProduct.css';

export default function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const uploadTask = storage.ref(`/items/${item.file.name}`).put(item);
      uploadTask.on(
        'state_changes',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (err) => console.log(err),
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: 'img' },
      { file: imgTitle, label: 'imgTitle' },
      { file: imgSm, label: 'imgSm' },
      { file: trailer, label: 'trailer' },
      { file: video, label: 'video' },
    ]);
  };

  console.log(movie);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        {/* Lefts */}
        <div className="lefts">
          <div className="addProductItem">
            <label>Title</label>
            <input type="text" placeholder="Movie Title" name="title" onChange={handleChange} />
          </div>

          <div className="addProductItem">
            <label>Description</label>
            <input type="text" placeholder="Description" name="description" onChange={handleChange} />
          </div>

          <div className="addProductItem">
            <label>Year</label>
            <input type="text" placeholder="Year" name="year" onChange={handleChange} />
          </div>

          <div className="addProductItem">
            <label>Genre</label>
            <input type="text" placeholder="Genre" name="genre" onChange={handleChange} />
          </div>

          <div className="addProductItem">
            <label>Duration</label>
            <input type="text" placeholder="Duration" name="duration" onChange={handleChange} />
          </div>

          <div className="addProductItem">
            <label>Limit</label>
            <input type="text" placeholder="Limit" name="limit" onChange={handleChange} />
          </div>

          <div className="addProductItem">
            <label>IsSeries</label>
            <select name="isSeries" id="isSeries" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div className="buttonCon">
            {uploaded === 5 ? (
              <button className="addProductButton">Create</button>
            ) : (
              <button className="addProductButton" onClick={handleUpload}>
                Upload
              </button>
            )}

            <Link to="/movies">
              <button className="back">Back</button>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="rights">
          <div className="addProductItem">
            <label>Image</label>
            <input type="file" id="img" name="img" onChange={(e) => setImg(e.target.files[0])} />
          </div>

          <div className="addProductItem">
            <label>Image Title</label>
            <input type="file" id="imgTitle" name="imgTitle" onChange={(e) => setImgTitle(e.target.files[0])} />
          </div>

          <div className="addProductItem">
            <label>Image Thumbnail</label>
            <input type="file" id="imgSm" name="imgSm" onChange={(e) => setImgSm(e.target.files[0])} />
          </div>

          <div className="addProductItem">
            <label>Trailer</label>
            <input type="file" id="trailer" name="trailer" onChange={(e) => setTrailer(e.target.files[0])} />
          </div>

          <div className="addProductItem">
            <label>Video</label>
            <input type="file" id="video" name="video" onChange={(e) => setVideo(e.target.files[0])} />
          </div>
        </div>
      </form>
    </div>
  );
}
