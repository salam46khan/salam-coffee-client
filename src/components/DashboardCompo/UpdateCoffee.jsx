import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useCoffee from "../../hooks/useCoffee";

const UpdateCoffee = ({ coffee }) => {

    const axiosPublic = useAxiosPublic()
    const [, refetch] = useCoffee()

    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const UpdateNewCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(UpdateNewCoffee);


        axiosPublic.put(`coffee/${coffee._id}`, UpdateNewCoffee)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })

    }
    return (
        <form onSubmit={handleUpdateCoffee} className=" rounded-xl p-5 w-full max-w-4xl">
            <div className=" grid gap-5 md:grid-cols-2 grid-cols-1">
                <div className="col-span-1">
                    <label className="fieldset-label text-slate-200">Name</label>
                    <input type="text" name="name" className="w-full rounded-3xl mt-2 shadow shadow-Secondary p-2 px-4 focus:outline-none focus:shadow-md" defaultValue={coffee.name} />
                </div>
                <div className="col-span-1">
                    <label className="fieldset-label text-slate-200">Chef</label>
                    <input type="text" name="chef" className="w-full rounded-3xl mt-2 shadow shadow-Secondary p-2 px-4 focus:outline-none focus:shadow-md" defaultValue={coffee.chef} />
                </div>
            </div>
            <div className=" grid gap-5 mt-5 md:grid-cols-2 grid-cols-1">
                <div className="col-span-1">
                    <label className="fieldset-label text-slate-200">Supplier</label>
                    <input type="text" name="supplier" className="w-full rounded-3xl mt-2 shadow shadow-Secondary p-2 px-4 focus:outline-none focus:shadow-md" defaultValue={coffee.supplier} />
                </div>
                <div className="col-span-1">
                    <label className="fieldset-label text-slate-200">Taste</label>
                    <input type="text" name="taste" className="w-full rounded-3xl mt-2 shadow shadow-Secondary p-2 px-4 focus:outline-none focus:shadow-md" defaultValue={coffee.taste} />
                </div>
            </div>
            <div className=" grid gap-5 mt-5 md:grid-cols-2 grid-cols-1">
                <div className="col-span-1">
                    <label className="fieldset-label text-slate-200">Category</label>
                    <input type="text" name="category" className="w-full rounded-3xl mt-2 shadow shadow-Secondary p-2 px-4 focus:outline-none focus:shadow-md" defaultValue={coffee.category} />
                </div>
                <div className="col-span-1">
                    <label className="fieldset-label text-slate-200">Details</label>
                    <input type="text" name="details" className="w-full rounded-3xl mt-2 shadow shadow-Secondary p-2 px-4 focus:outline-none focus:shadow-md" defaultValue={coffee.details} />
                </div>
            </div>
            <div className="mt-5">
                <label className="fieldset-label text-slate-200">Photo</label>
                <input type="text" name="photo" className="w-full rounded-3xl mt-2 shadow shadow-Secondary p-2 px-4 focus:outline-none focus:shadow-md" defaultValue={coffee.photo} />
            </div>
            <div className="mt-5 flex justify-center">
                <input className="my-btn text-white" type="submit" value='Update Coffee' />
            </div>
        </form>
    );
};

export default UpdateCoffee;