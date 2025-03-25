"use server";

import { cookies } from "next/headers";

const Avatar = async () => {
    const cookieStore = cookies();
    const session = cookieStore.get("session")?.value;
    // Parse the session if it's a JSON string
    const sessionData = session ? JSON.parse(session) : null;
    console.log(sessionData);
    return (
        <div className="flex items-center mb-4">
            {sessionData?.imageUrl && (
                <img
                    src={sessionData.imageUrl}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full ml-4"
                />
            )}
            <h1 className="text-lg font-bold">صباح الخير يا {sessionData.name}</h1>
        </div>
    );
};

export default Avatar;