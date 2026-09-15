const postsModel = require("../model/posts.model");

function toId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}

exports.listPosts = async (req, res, next) => {
  try {
    const posts = await postsModel.getAll();
    
    res.json(posts);

    // let html = "<div> <h1> Blog Titles </h2>"
    // for (let post of posts) {
    //   html += "<p>" + post.subject + "</p>"
    // }
    // html += "</div>"
    // res.send(html)

  } catch (e) {
    next(e);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const id = toId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid id" });

    const post = await postsModel.getById(id);
    if (!post) return res.status(404).json({ error: "Not found" });

    res.json(post);
  } catch (e) {
    next(e);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { subject, entry, mood } = req.body || {};
    if (typeof subject !== "string" || !subject.trim()) {
      return res.status(400).json({ error: "subject is required" });
    }
    if (typeof entry !== "string") {
      return res.status(400).json({ error: "entry is required" });
    }
    if (typeof mood !== "string" || !mood.trim()) {
      return res.status(400).json({ error: "mood is required" });
    }

    const created = await postsModel.create({
      subject: subject.trim(),
      entry,
      mood: mood.trim(),
    });

    res.status(201).json(created);
  } catch (e) {
    next(e);
  }
};

exports.replacePost = async (req, res, next) => {
  try {
    const id = toId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid id" });

    const { subject, entry, mood } = req.body || {};
    if (typeof subject !== "string" || !subject.trim()) {
      return res.status(400).json({ error: "subject is required" });
    }
    if (typeof entry !== "string") {
      return res.status(400).json({ error: "entry is required" });
    }
    if (typeof mood !== "string" || !mood.trim()) {
      return res.status(400).json({ error: "mood is required" });
    }

    const updated = await postsModel.replace(id, {
      subject: subject.trim(),
      entry,
      mood: mood.trim(),
    });

    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (e) {
    next(e);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const id = toId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid id" });

    const { subject, entry, mood } = req.body || {};
    if (subject !== undefined && (typeof subject !== "string" || !subject.trim())) {
      return res.status(400).json({ error: "subject must be a non-empty string" });
    }
    if (entry !== undefined && typeof entry !== "string") {
      return res.status(400).json({ error: "entry must be a string" });
    }
    if (mood !== undefined && (typeof mood !== "string" || !mood.trim())) {
      return res.status(400).json({ error: "mood must be a non-empty string" });
    }

    const updated = await postsModel.update(id, {
      ...(subject !== undefined ? { subject: subject.trim() } : {}),
      ...(entry !== undefined ? { entry } : {}),
      ...(mood !== undefined ? { mood: mood.trim() } : {}),
    });

    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (e) {
    next(e);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const id = toId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid id" });

    const deleted = await postsModel.remove(id);
    if (!deleted) return res.status(404).json({ error: "Not found" });

    res.json(deleted);
  } catch (e) {
    next(e);
  }
};