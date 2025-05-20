import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const DashNav = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="bg-primaryColor grid grid-cols-2 items-center py-2 px-3">
            <div className="col-span-1">

            </div>
            <div className="col-span-1 flex justify-end">
                <div className="user-profile">
                    <div>
                        
                    </div>
                    <div>
                        name+ email
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashNav;