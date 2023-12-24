import PromptCard from "./PromptCard";

export const PromptCardList = ({ data }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard key={post._id} post={post} />
      ))}
    </div>
  );
};
