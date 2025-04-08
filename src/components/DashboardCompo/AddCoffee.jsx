
const AddCoffee = () => {

    const handleAddCoffee = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, chef, supplier, taste, category, details, photo}
        console.log(newCoffee);
        
    }

    return (
        <div className="text-white ">
            <div className="flex justify-center items-center flex-col py-5">
                <h1 className="text-3xl font-subTitle font-bold">Add New Coffee</h1>
                <p className="text-center py-3 max-w-3xl text-slate-400">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <div className="flex justify-center">
                <form onSubmit={handleAddCoffee} className="bg-[#fff1] rounded-xl shadow-2xl shadow-black p-5 w-full max-w-4xl">
                    <div className=" grid gap-5 md:grid-cols-2 grid-cols-1">
                        <div className="col-span-1">
                            <label className="fieldset-label text-slate-200">Name</label>
                            <input type="text" name="name" className="w-full rounded-3xl mt-2 shadow shadow-black p-2 px-4 focus:outline-none focus:shadow-md" placeholder="name" />
                        </div>
                        <div className="col-span-1">
                            <label className="fieldset-label text-slate-200">Chef</label>
                            <input type="text" name="chef" className="w-full rounded-3xl mt-2 shadow shadow-black p-2 px-4 focus:outline-none focus:shadow-md" placeholder="chef name" />
                        </div>
                    </div>
                    <div className=" grid gap-5 mt-5 md:grid-cols-2 grid-cols-1">
                        <div className="col-span-1">
                            <label className="fieldset-label text-slate-200">Supplier</label>
                            <input type="text" name="supplier" className="w-full rounded-3xl mt-2 shadow shadow-black p-2 px-4 focus:outline-none focus:shadow-md" placeholder="supplier name" />
                        </div>
                        <div className="col-span-1">
                            <label className="fieldset-label text-slate-200">Taste</label>
                            <input type="text" name="taste" className="w-full rounded-3xl mt-2 shadow shadow-black p-2 px-4 focus:outline-none focus:shadow-md" placeholder="Taste" />
                        </div>
                    </div>
                    <div className=" grid gap-5 mt-5 md:grid-cols-2 grid-cols-1">
                        <div className="col-span-1">
                            <label className="fieldset-label text-slate-200">Category</label>
                            <input type="text" name="category" className="w-full rounded-3xl mt-2 shadow shadow-black p-2 px-4 focus:outline-none focus:shadow-md" placeholder="Category" />
                        </div>
                        <div className="col-span-1">
                            <label className="fieldset-label text-slate-200">Details</label>
                            <input type="text" name="details" className="w-full rounded-3xl mt-2 shadow shadow-black p-2 px-4 focus:outline-none focus:shadow-md" placeholder="type details" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <label className="fieldset-label text-slate-200">Photo</label>
                        <input type="text" name="photo" className="w-full rounded-3xl mt-2 shadow shadow-black p-2 px-4 focus:outline-none focus:shadow-md" placeholder="paste photo URL" />
                    </div>
                    <div className="mt-5 flex justify-center">
                        <input className="my-btn text-white" type="submit" value='Add Coffee' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;