import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const startup = defineType({
    name: "startup",
    title: "Startup",
    type: "document",
    icon: UserIcon,
    fields: [ 
        defineField({ //define fields which each author document will have
            name: "slug",
            type: "slug",
            options: {
                source: "title", //generate slug from name field if title is this is a present -> this-is-a-present-slug 
                maxLength: 96,
            },  
        }),
         defineField({
            name: "title",
            type: "string",  
        }),
         defineField({
            name: "author",
            type: "reference",
            to:{type: "author"}, //reference to author schema type  
        }),
         defineField({
            name: "views",
            type: "number",  
        }),
         defineField({
            name: "description",
            type: "text",  
        }),
        defineField({
            name: "category",
            type: "string", 
            validation: (Rule) => Rule.min(1).max(20).required().error("please add catogory"), //make category a required field  
        }),
        defineField({
            name: "image",
            type: "url", 
            validation: (Rule) => Rule.required(), //make image a required field and should be a valid url
        }),
        defineField({
            name: "pitch",
            type: "markdown",// markdown is like a text area where you can write formatted text its differernt from text field because it allows formatting like bold, italics, links etc but text does not allow that 
        }),
    ],  
 
})