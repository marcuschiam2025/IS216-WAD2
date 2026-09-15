# This is a simple blog backend application using Node.js + Express.js + Mongoose + MongoDB

# This application exposes 5 APIs:
    GET getPosts
    GET findPost/:subject
    POST addPost
    POST deletePost
    POST editPost
    
# Example usage:
    In your Vue.js application, make this async. call to retrieve all blog posts in JSON data format:
        const response = await axios.get('http://localhost:8000/getPosts')

# Setting Up
1: setup MongoDB -- refer to MongoDB_Guide.pptx given in mongodb_guide/ folder

2: In the terminal, go to the folder
    cd REST/blog

3: run commands
    pnpm install
    pnpm run dev



