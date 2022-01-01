# [Static Website](https://cloudresumechallenge.dev/docs/the-challenge/azure/#4-static-website)

> Your HTML resume should be deployed online as an Azure Storage static website. 
Services like Netlify and GitHub Pages are great and I would normally recommend them for personal static site deployments, 
but they make things a little too abstract for our purposes here. Use Azure Storage.

In today's task, I'll be deploying my resume I coded in HTML & CSS as a static webopage as an Azure Storage Static Website. 

I would be following a tutorial provided by [Microsoft Docs](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-how-to?tabs=azure-portal) on this specific matter as I have no intention of reinventing the wheel :-)

## 1. After signing into your Azure Portal, you would need to activate **Static website** in your storage account, if you do not have one created you can create one just like I did below. 

![1](https://github.com/ifenium/The-Cloud-Resume-Challenge/blob/main/04/2.png)

## 2. Reviewing the configuraiton of the storage account about to be created. 

![2](https://github.com/ifenium/The-Cloud-Resume-Challenge/blob/main/04/3.png)


## 3. Once the resource has been creates, Select Enabled to enable static website hosting for the storage account.
    > In the **Index document name** field, specify a default index page (For example: index.html).
    > The default index page is displayed when a user navigates to the root of your static website.

    > In the **Error document** path field, specify a default error page (For example: 404.html).
    > The default error page is displayed when a user attempts to navigate to a page that does not exist in your static website.
 
![3](https://github.com/ifenium/The-Cloud-Resume-Challenge/blob/main/04/4.png)

## 4. - Select Storage Explorer (preview).
   > Expand the BLOB CONTAINERS node, and then select the $web container.
   > Choose the Upload button to upload files.

![4](https://github.com/ifenium/The-Cloud-Resume-Challenge/blob/main/04/5.png)

## 5. Find the website URL, The URL of your site appears in the **Primary endpoint field**.

![3](https://github.com/ifenium/The-Cloud-Resume-Challenge/blob/main/04/4.png)

## 6. Final Result

![](https://github.com/ifenium/The-Cloud-Resume-Challenge/blob/main/04/Result.png)


## 7. 404 Error Page

![](https://github.com/ifenium/The-Cloud-Resume-Challenge/blob/main/04/error.png)
