import prisma from "../prisma.js";

export async function getAllTopics(req, res) {
    res.json(await prisma.topics.findMany())
}