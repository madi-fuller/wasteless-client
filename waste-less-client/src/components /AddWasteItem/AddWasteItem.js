import "./AddWasteItem.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddWasteItem() {
  const formRef = useRef();
  const itemNameRef = useRef();
  const itemCategoryRef = useRef();
  const itemQuantityRef = useRef();

  const navigate = useNavigate();

  const API_URL = "http://localhost:8080";

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItemData = {
      name: itemNameRef.current.value,
      category: itemCategoryRef.current.value,
      quantity: itemQuantityRef.current.value,
    };

    const postNewItem = async () => {
      try {
        await axios.post(`${API_URL}/api/add-waste`, newItemData);
      } catch (error) {
        console.error("There has been an error", error);
      }
    };
    postNewItem();
  };

  return (
    <section className="add-item">
      <div className="add-item__container">
        <div className="add-item__container-header">
          <p className="add-item__close">&times;</p>
        </div>
        <div className="add-item__content-container">
          <h2 className="add-item__title">Add Wasted Food Item</h2>
          <p className="add-item__subtitle">
            Fill out all fields to add an item to your log
          </p>
          <div class="add-item__container container">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div class="mb-3">
                <label className="form-label"> Item Name</label>
                <input
                  ref={itemNameRef}
                  type="text"
                  class="add-item__input form-control"
                  placeholder="Item Name"
                />
              </div>
              <div class="mb-3">
                <label className="form-label"> Category</label>
                <select
                  ref={itemCategoryRef}
                  class="add-item__input form-select"
                  aria-label="Category"
                >
                  <option selected> Select One</option>
                  <option value="1">Dairy</option>
                  <option value="2">Meat / Meat Alternative 2</option>
                  <option value="3">Fruit </option>
                  <option value="4">Vegetable</option>
                  <option value="5">Grain</option>
                  <option value="6">Other</option>
                </select>
              </div>
              <div class="mb-3">
                <label className="form-label"> Quantity</label>
                <select
                  class="add-item__input form-select"
                  aria-label="Unit of Measurement"
                >
                  <option selected>Measured In</option>
                  <option value="items">Number of Items</option>
                  <option value="pounds">Pounds</option>
                  <option value="cups">Cups</option>
                </select>
              </div>
              <div class="mb-3">
                <input
                  ref={itemQuantityRef}
                  type="number"
                  class="add-item__input form-control"
                  placeholder="Quantity ..."
                />
              </div>
              <div class="mb-3">
                <label for="datePicker" class="form-label">
                  Date of Disposal
                </label>
                <input
                  type="date"
                  class="add-item__input form-control"
                  id="datePicker"
                />
              </div>
              <div className="add-item__footer-container">
                <button type="submit" class="add-item__btn btn btn-primary">
                  Add Item
                </button>
                <button type="cancel" className="add-item__btn--cancel">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddWasteItem;
