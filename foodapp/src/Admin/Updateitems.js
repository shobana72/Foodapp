// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Adminheader from "../Components/Adminheader";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { GrEdit } from "react-icons/gr";
// import '../Styles/update.css';

// const Updateitems = () => {
//     const [foodItems, setFoodItems] = useState([]);

//     useEffect(() => {
//         fetch(`http://localhost:5000/all-foods`)
//             .then((res) => res.json())
//             .then((data) => 
//             setFoodItems(data));
//     }, []);

//     const deleteItem = (id) => {
//         fetch(`http://localhost:5000/food/${id}`, {
//             method: 'DELETE'
//         })
//         .then((res) => res.json())
//         .then((data) => {
//             toast.success("Successfully deleted the item!");
//             setFoodItems(prevFoodItems => prevFoodItems.filter(item => item._id !== id));
//             // You may want to update the state here to reflect the changes
//         });
//     };

//     const displayFoods = foodItems.map(food => (
//         <div className="card" key={food._id}>
//             <li>
//                 <div className="div1">
//                     <a href='/food'><img src={food.imgurl} alt={food.foodname}></img></a>
                    
//                 </div>
//                 {/* <div className="div">
//                     <a href='/food'><img src={food.img} alt={food.foodname}></img></a>
//                 </div> */}
//                 <div className="div2">
//                     <h4><span>Category : </span>{food.foodname}</h4>
//                     <h4><span>Price: </span>₹{food.price}/-</h4>
//                 </div>
//                 <div className="div3">
//                     <Link to={`/admin/edititems/${food._id}`}>
//                         <button>Edit Item <GrEdit /></button>
//                     </Link>
//                     <button onClick={() => deleteItem(food._id)}>Delete Item <RiDeleteBin6Line /></button>
//                 </div>
//             </li>
//         </div>
//     ));

//     return (
//         <div>
//             <Adminheader />
//             <div className="admin">
//                 <div className="admin-conatainer">
//                     <ul>
//                         {displayFoods}
//                     </ul>
//                 </div>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// }

// export default Updateitems;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Adminheader from "../Components/Adminheader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import '../Styles/update.css';

const Updateitems = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedItems, setSelectedItems] = useState([]);
    const limit = 10;  // Number of items per page

    useEffect(() => {
        fetch(`http://localhost:5000/all-foods?page=${currentPage}&limit=${limit}`)
            .then((res) => res.json())
            .then((data) => {
                setFoodItems(data.foods);
                setTotalPages(data.totalPages);
            })
            .catch((error) => {
                console.error("Error fetching food items:", error);
            });
    }, [currentPage]);

    const handleSelectItem = (id) => {
        setSelectedItems(prev => 
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const deleteItem = (id) => {
        fetch(`http://localhost:5000/food/${id}`, {
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then((data) => {
            toast.success("Successfully deleted the item!");
            setFoodItems(prevFoodItems => prevFoodItems.filter(item => item._id !== id));
        })
        .catch((error) => {
            console.error("Error deleting item:", error);
        });
    };

    const deleteSelectedItems = () => {
        fetch('http://localhost:5000/foods', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ids: selectedItems })
        })
        .then((res) => res.json())
        .then((data) => {
            toast.success("Successfully deleted selected items!");
            setFoodItems(prevFoodItems => prevFoodItems.filter(item => !selectedItems.includes(item._id)));
            setSelectedItems([]);
        })
        .catch((error) => {
            console.error("Error deleting items:", error);
        });
    };

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const displayFoods = foodItems.map(food => (
        <div className="card" key={food._id}>
            <li>
                <div className="div1">
                    <input 
                        type="checkbox" 
                        checked={selectedItems.includes(food._id)}
                        onChange={() => handleSelectItem(food._id)} 
                    />
                    <Link to={`/food/${food._id}`}><img src={food.imgurl.startsWith('http') ? food.imgurl  : `http://localhost:5000${food.imgurl}`} alt={food.foodname}/></Link>
                </div>
                <div className="div2">
                    <h4><span>Category : </span>{food.foodname}</h4>
                    <h4><span>Price: </span>₹{food.price}/-</h4>
                </div>
                <div className="div3">
                    <Link to={`/admin/edititems/${food._id}`}>
                        <button>Edit Item <GrEdit /></button>
                    </Link>
                    <button onClick={() => deleteItem(food._id)}>Delete Item <RiDeleteBin6Line /></button>
                </div>
            </li>
        </div>
    ));

    return (
        <div>
            <Adminheader />
            <div className="admin">
                <div className="admin-container">
                    <ul>
                        { displayFoods}
                    </ul>
                    <div className="pagination">
                        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                    <button onClick={deleteSelectedItems} disabled={selectedItems.length === 0}>
                        Delete Selected Items
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Updateitems;
