import axios from "axios";

const baseUrl = "https://vimvoxlab.com.np/e-demat/public/api/login";
// const baseUrl = "https://vimvoxlab.com.np/e-demat/public/api/login";

export const handleLogin = async (username, password) => {
    try {
        const { data, status } = await axios({
            method: "POST",
            url: `https://vimvoxlab.com.np/demat/public/api/login`,
            data: {
                username: username,
                password: password
            },
        });
        return { data, status };
    }
    catch (error) {
        return { status: "failed", message: error.message };
    }
};