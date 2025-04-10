import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import UpdateCoffee from "./UpdateCoffee";

const AllCoffee = () => {
    const [coffee, setCoffee] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/coffee')
            .then(res => res.json())
            .then(data => setCoffee(data))
    }, [])

    const handleDeleteCoffee = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });

    }
    return (
        <div className="text-white">
            <div className="flex justify-center items-center flex-col py-5">
                <h1 className="text-3xl font-subTitle font-bold">All Coffee</h1>
                <p className="text-center py-3 max-w-3xl text-slate-400">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-lg text-Secondary">
                                <th>SL.</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                coffee.map(coffee => <tr
                                    key={coffee._id}
                                >
                                    <td>
                                        <img className="h-8" src={coffee?.photo} alt="" />
                                    </td>
                                    <td>{coffee.name}</td>
                                    <td>{coffee.category}</td>
                                    <td className="flex gap-3">
                                        <button onClick={() => handleDeleteCoffee(coffee._id)} className="bg-red-600 h-8 w-8 flex justify-center items-center">
                                            <MdDelete className="text-xl" />
                                        </button>
                                        <button onClick={() => document.getElementById('my_modal_3').showModal()} className="bg-green-600 h-8 w-8 flex justify-center items-center">
                                            <FiEdit className="text-xl" />
                                        </button>

                                        {/* dialog  */}
                                        <dialog id="my_modal_3" className="modal">
                                            <div className="modal-box bg-[#000000b4]">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                </form>

                                                <div>
                                                    <UpdateCoffee coffee={coffee}></UpdateCoffee>
                                                </div>
                                            </div>
                                        </dialog>

                                    </td>




                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default AllCoffee;