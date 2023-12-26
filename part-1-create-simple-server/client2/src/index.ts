import { Chain } from "../client/zeus";

const chain = Chain("http://localhost:4000/graphql");


async function getUser() {
    try {
        const response = await chain("query")({
            getUser: [{
                id: "1",
            },
            {
                email: true,
                firstname: true
            }]
        })
        console.log(response.getUser)
    }
    catch (error) {
        console.log(error)
    }
}

async function createUser() {
    try {
        const response = await chain("mutation")({
            createUser: [{
                input: {
                    email: 'Dp2@gmail.com',
                    firstname: "DP",
                    lastname: "Test User",
                },
            },
            {
                id: true,
            }]
        })
        console.log(response.createUser)
    }
    catch (error) {
        console.log(error)
    }
}

getUser()