

export const CategoriesCsvHeaders= [
    "Name",
    "Title",
    "Description",
    "Image",
    "Parent",
]

export const CategoriesCsvStyler= {

    Name: {
        type: "text",
    },
    Title: {
        type: "text",
    },
    Description: {
        type: "text",
    },
    Image: {
        type: "image",
    },
    Parent: {
        type: "text",
        is_parent:true,
    },

}


export class CategoriesCsvFormat {
    static CheckValidFile(headers){
        if(!headers)return false;
        return !CategoriesCsvHeaders.some(it=>{
            return !headers.includes(it)
        })
    }
}