import { getCurrentUserQuery } from "../api/userApi";

export const getCurrentUser = async () => {
    const user = await getCurrentUserQuery();

    if (!user.success) return;

    return user.data;
};