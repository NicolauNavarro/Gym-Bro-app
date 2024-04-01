const { Client } = require("@notionhq/client");
const { text } = require("express");
const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function getDatabase() {
  const response = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  console.log(response);
}

function createTrainer({ name }) {
  notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID,
    },
    properties: {
      title: {
        title: [
          {
            type: "text",
            text: {
              content: name,
            },
          },
        ],
      },
    },
  });
}

createTrainer({ name: "Oscar" });
