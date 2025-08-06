"use server";
import { getUserById, updateUser } from "@/services/userService";
import { revalidatePath } from "next/cache"

export async function getProfileAction(userId: string) {
    const user = await getUserById(userId);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

// Testing function
export async function updateUserProfile(userId: string, formData: FormData) {
    const firstName = formData.get("firstName")?.toString() ?? ""
    const lastName = formData.get("lastName")?.toString() ?? ""
    const phone = formData.get("phone")?.toString() ?? ""

    try {
        await updateUser(userId, { firstName, lastName, phone })
        revalidatePath("/profile")
        return { success: true }
    } catch (error) {
        return { error: "Could not update profile." }
    }
}