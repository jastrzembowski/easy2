import React, { useState } from "react";
import "./createContainer.scss";
import { motion } from "framer-motion";
import placeholder from "../../images/food-placeholder.jpg";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { categories } from "../../utils/data";
import { saveItem } from "../../utils/firebaseFunctions";
import Loader from "./Loader";
import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md";
import { storage } from "../../firebase.config";

export default function CreateContainer() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("second");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [addons, setAddons] = useState(false)

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Nie udało się załadować pliku. Spróbuj ponownie");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Zdjęcie dodane!! : ) ");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };
  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Usunięto obrazek! :)");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };
  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !price || !description || !category) {
        setFields(true);
        setMsg("Uzupełnij wymagane pola!!");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      }
      else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageUrl: `${imageAsset?imageAsset:
            "https://firebasestorage.googleapis.com/v0/b/easybar-9df33.appspot.com/o/images%2F1668774242826-food-placeholder.jpg?alt=media&token=26a9e9db-c15d-45cc-ba97-06ac76c5de69"}`,
          category: category,
          description: description,
          qty: 1,
          avaible: true,
          addons: true,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Udało się ");
        setAlertStatus("success");
        clearData();
        setTimeout(() => {
          setFields(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Nie udało się zapisać. Spróbuj ponownie");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
  };
  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setDescription("");
    setPrice("");
    setCategory(null);
    setAddons(false);
  };

  return (
    <div className="create-container">
      {fields && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fields ${
            alertStatus === "danger" ? "fields-danger" : "fields-ok"
          }`}
        >
          {msg}{" "}
        </motion.p>
      )}
      <div className="create-box">
        <div className="create-input">
          <MdFastfood />
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nazwa"
          />
        </div>
        <div className="create-select">
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="other">Wybierz kategorię</option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="create-select-item"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className="create-checkbox">
          <input type="checkbox" checked={addons} onClick={()=>{setAddons(!addons);console.log( addons)}} /><p>Czy to danie jest serwowane z dodatkami?</p>
       </div> <div className="img-box">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label>
                    <div>
                      <MdCloudUpload
                        style={{ fontSize: "35px", color: "gray" }}
                      />
                      <p>Kliknij aby dodać zdjęcie</p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="image-holder">
                    <img src={imageAsset} alt="uploaded image" />
                    <button
                      type="button"
                      className="delete-button"
                      onClick={deleteImage}
                    >
                      <MdDelete style={{ color: "white" }} />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="flex-holder">
          <div className="create-input">
            <MdFoodBank />
            <input
              type="text"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Opis"
            />
          </div>
          <div className="create-input">
            <MdAttachMoney />
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Cena"
            />
          </div>
        </div>
        <div className="create-input">
          <button type="button" className="submit-button" onClick={saveDetails}>
            Zapisz
          </button>
        </div>
      </div>
          </div>
  );
}
