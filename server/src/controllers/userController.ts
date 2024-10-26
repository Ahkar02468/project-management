import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const getUsers = async (
     req: Request,
     res: Response
): Promise<void> => {
     try {
          const users = await prisma.user.findMany()
          res.json(users)
     } catch (error: any) {
          res
               .status(500)
               .json({ message: `Error performing fetching users ${error.message}` })
     }
}

export const postUser = async (req: Request, res: Response) => {
     const {
          username,
          cognitoId,
          profilePictureUrl = "i1.jpg",
          teamId = 1,
     } = req.body

     try {
          const newUsers = await prisma.user.create({
               data: {
                    username,
                    cognitoId,
                    profilePictureUrl,
                    teamId
               }
          })
          res.json({ message: "User Created Successfully", newUsers })
     } catch (error: any) {
          res
               .status(500)
               .json({ message: `Error performing fetching users ${error.message}` })
     }
}