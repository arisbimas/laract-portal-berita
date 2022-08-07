import { Link } from "@inertiajs/inertia-react";
import Avatar from "avataaars";
const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">
                    LARACT9-NEWS
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex="0"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <Avatar
                                style={{ width: "100%", height: "100%" }}
                                avatarStyle="Circle"
                                topType="ShortHairFrizzle"
                                accessoriesType="Round"
                                hairColor="Brown"
                                facialHairType="BeardMajestic"
                                facialHairColor="Platinum"
                                clotheType="ShirtScoopNeck"
                                clotheColor="Blue03"
                                eyeType="Hearts"
                                eyebrowType="UpDownNatural"
                                mouthType="Serious"
                                skinColor="Yellow"
                            />
                        </div>
                    </label>
                    <ul
                        tabIndex="0"
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        {!user ? (
                            <>
                                <li>
                                    <Link href={route("login")} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("register")} as="button">
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href={route("dashboard")}
                                        className="justify-between"
                                        as="button"
                                    >
                                        Dashboard
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("logout")} as="button">
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
