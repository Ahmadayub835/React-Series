import React from 'react'
import { useCallback , useEffect} from 'react'
import {Button , Input , RTE , Select} from '../../components/index'
import appService from '../../appwrite/appConf'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {
    const {register , handleSubmit , getValues , setValue , control , watch} = useForm({
        defaultValues : {
            title : post?.title  || '',
//If post object is provided and it has a title property, use its value as the default value for the title field.
//If post is null or undefined, or if it doesn't have a title property, set an empty string ('') as the default value for the title field.
            slug : post?.$id || '', //this and all others are same.
            content : post?.content || '',
            status : post?.status || 'active'
        },
    });
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

        const submit = async (data) => {
            //If there's a new image in the form, upload it.
            if(post){
               const file =  data.image[0] ? await appService.uploadFile(data.image[0]) : null;
            
            // Check if there's an existing file to be replaced.
            if(file){
                // Delete the old file.
                appService.deleteFile(post.featuredImage)
            }

            // Update the post in the database.
            const dbPost = await appService.updatePost(post.$id , {
                ...data,
                featuredImage: file ? file.$id : undefined,
            })

            // If the update is successful, go to the updated post's page.
            if(dbPost){
                navigate(`/post/${dbPost.$id}`);
            } 
        } 
        else {
                // Upload the new image.
                const file = await appService.uploadFile(data.image[0])
                // If the file upload is successful.
                if(file) {
                     // Set featuredImage in the data to the new file's $id.
                    const fileId = file.$id
                    data.featuredImage = fileId
                    // Create a new post in the database.
                    const dbPost = await appService.CreatePost({
                        ...data, //the data is spread and creating a post with title,content,status and slug(id)
                        userId: userData.$id,
                    //userId is set to userData.$id, where userData probably contains information about the currently logged-in user.
                    })
                     // If post creation is successful, navigate to the new post's page.
                    if(dbPost){
                        navigate(`/post/${dbPost.$id}`)
                    }
                }
            }
        };
        
            const slugTransform = useCallback((value) => {
                if (value && typeof value === "string")
                    return value
                        .trim()
                        .toLowerCase()
                        .replace(/[^a-zA-Z\d\s]+/g, "-")
                        .replace(/\s/g, "-");
        
                return "";
            }, []);

            useEffect(() => {
                const subscription = watch((value, { name }) => {
                    if (name === "title") {
                        setValue("slug", slugTransform(value.title), { shouldValidate: true });
                    }
                });
        
                return () => subscription.unsubscribe();
            }, [watch, slugTransform, setValue]);
        


  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default PostForm