"use server";

import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

// onboard user-> creates or updates user in database
export const onBoardUser = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      return {
        success: false,
        message: "User not found",
      };
    }
    //  check if user is already onboarded
    const { id, firstName, lastName, imageUrl, emailAddresses } = user;
    //upsert: update if exists, create if not
    const newUser = await db.user.upsert({
      where: { clerkID: id },
      update: {
        name:
          firstName && lastName
            ? `${firstName} ${lastName}`
            : firstName || lastName || null,
        image: imageUrl || null,
        email: emailAddresses[0]?.emailAddress || "",
      },
      create: {
        clerkID: id,
        name:
          firstName && lastName
            ? `${firstName} ${lastName}`
            : firstName || lastName || null,
        image: imageUrl || null,
        email: emailAddresses[0]?.emailAddress || "",
      },
    });
    return {
      success: true,
      message: "✅ User onboarded successfully",
      user: newUser,
    };
  } catch (error) {
    console.error("❌ Error in onBoardUser:", error);
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

// get current user from database
export const getCurrentUser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return null;
    }
    const dbUser = await db.user.findUnique({
      where: {
        clerkID: user.id,
      },
      select: {
        id: true,
        email: true,
        image: true,
      },
    });
    return dbUser;
  } catch (error) {
    console.error("❌ Error in getCurrentUser:", error);
    return null;
  }
};
