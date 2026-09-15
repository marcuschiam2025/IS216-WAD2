const fs = require("fs/promises");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "posts.json");

async function readPosts() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const posts = JSON.parse(raw);
    return Array.isArray(posts) ? posts : [];
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

async function writePosts(posts) {
  await fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2), "utf8");
}

exports.getAll = async () => {
  return readPosts();
};

exports.getById = async (id) => {
  const posts = await readPosts();
  return posts.find((p) => p.id === id) || null;
};

exports.create = async ({ subject, entry, mood }) => {
  const posts = await readPosts();
  const nextId = posts.reduce((max, p) => Math.max(max, p.id || 0), 0) + 1;

  const post = { id: nextId, subject, entry, mood };
  posts.push(post);

  await writePosts(posts);
  return post;
};

exports.replace = async (id, { subject, entry, mood }) => {
  const posts = await readPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return null;

  posts[idx] = { id, subject, entry, mood };
  await writePosts(posts);
  return posts[idx];
};

exports.update = async (id, patch) => {
  const posts = await readPosts();
  const post = posts.find((p) => p.id === id);
  if (!post) return null;

  Object.assign(post, patch);
  await writePosts(posts);
  return post;
};

exports.remove = async (id) => {
  const posts = await readPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return null;

  const [deleted] = posts.splice(idx, 1);
  await writePosts(posts);
  return deleted;
};