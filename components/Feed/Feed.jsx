"use client";

import { useState, useEffect } from "react";
import { PromptCardList } from "./PromptCardList";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const [searchText, setSearchText] = useState("");

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={posts} />
    </section>
  );
};

export default Feed;
