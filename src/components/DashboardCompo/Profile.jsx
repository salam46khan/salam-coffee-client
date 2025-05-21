import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className="flex flex-col  items-center justify-center md:flex-row">
            <div className="w-full max-w-[280px] p-4 bg-[#fff1] rounded-xl shadow-2xl">
                <img className="w-full rounded-xl" src={user.photoURL} alt="" />

                <div className="pt-3">
                    <p className="text-2xl text-center font-subTitle text-Secondary">{user.displayName}</p>
                    <p className="text-center text-gray-300 text-sm">{user.email}</p>

                    {/* <table className="table">
                        <tr>
                            <th>Phone</th>
                            <td>098</td>
                        </tr>
                        <tr>
                            <th>Distic</th>
                            <td>dis</td>
                        </tr>
                        <tr>
                            <th>Upozila</th>
                            <td>dis</td>
                        </tr>
                        <tr>
                            <th>Village</th>
                            <td>dis</td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>dis</td>
                        </tr>
                        <tr>
                            <th>Date of Birth</th>
                            <td>dis</td>
                        </tr>
                        
                    </table> */}
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Profile;