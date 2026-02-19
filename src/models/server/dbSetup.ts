import { db } from "../name";
import { questionCollection } from "../name";

import { databases } from "./config";
import createQuestionCollection from "./question.collection";

export default async function getOrCreateDB() {
    try {
        await databases.get(db)
        console.log("database connected");

    } catch (error) {
        try {
            await databases.create(db, db)
            console.log("database created");
            await Promise.all([
                createQuestionCollection(),

            ])

            console.log("collection created");
            console.log("database connected");




        } catch (error) {
            console.log("error creating databases or collection", error);



        }
    }
    return databases
}