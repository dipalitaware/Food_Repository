import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowRight } from 'react-bootstrap-icons';
///import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
// import { faCat } from '@awesome.me/kit-KIT_CODE/icons/sharp/solid'
// import { faDog } from '@awesome.me/kit-KIT_CODE/icons/duotone/solid'
// import { faDragon } from '@awesome.me/kit-KIT_CODE/icons/sharp-duotone/solid'


const BiryaniForm = () => {
  const [biryani, setBiryani] = useState([]);
  const [biryaniForm, setBiryaniForm] = useState({ biryaniType:'', biryaniName:'' });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBiryaniForm((prev) => ({ ...prev, [name]: value }));
  };

  const saveData = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updated = [...biryani];
      updated[editIndex] = biryaniForm;
      setBiryani(updated);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setBiryani([...biryani, biryaniForm]);
    }
    setBiryaniForm({ biryaniType:'', biryaniName:'' });
  }

   const handleEdit = (index) => {
    setBiryaniForm(biryani[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

   return (
    <>
      <h2 className="cust-title">Place your Biryani Order</h2>
        <div>
            <form className="cust-data form-align" onSubmit={saveData}>
                <label>Biryani Type :
                <input
                    type="text"
                    name="biryaniType"
                    placeholder="Biryani Type"
                    value={biryaniForm.biryaniType}
                    onChange={handleChange} required
                />
                </label>
                
                <label>Biryani Name :
                <input
                    type="text"
                    name="biryaniName"
                    placeholder="Biryani Name"
                    value={biryaniForm.biryaniName}
                    onChange={handleChange} required
                />
                </label>

                <button type="submit">
                {isEditing ? 'Update Biryani' : 'Add to Cart'}
                </button>

                <div>
                  <h1>jkfhdjfhdjfh</h1>
                <FontAwesomeIcon icon="fa-solid fa-pen" />
                <i class="bi bi-1-square"></i>
                <ArrowRight />
  </div>
            </form>
        </div>

      <h2 className="cust-title">Placed Order Details</h2>
      {
        <table className="cust-data form-align">
          <thead>
            <tr>
              <th>Biryani Type</th>
              <th>Biryani Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {biryani.map((b, index) => (
              <tr key={index}>
                <td>{b.biryaniType}</td>
                <td>{b.biryaniName}</td>
                <td>
                  
                  <button onClick={() => handleEdit(index)}>
                  <FontAwesomeIcon icon="fa-solid fa-pen" />
                    Editeee</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
};

export default BiryaniForm;
