import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
    name: "author",
    title: "Author",
    type: "document",
    icon: UserIcon,
    fields: [ 
        defineField({ //define fields which each author document will have
            name: "id",
            type: "number",  
        }),
         defineField({
            name: "name",
            type: "string",  
        }),
         defineField({
            name: "username",
            type: "string",  
        }),
         defineField({
            name: "email",
            type: "string",  
        }),
         defineField({
            name: "image",
            type: "url",  
        }),
        defineField({
            name: "bio",
            type: "text",  
        }),
    ],   
    preview: { // select those authors by their name in the studio
        select: {
            title: "name",  
          
        },     
    },   
 
})