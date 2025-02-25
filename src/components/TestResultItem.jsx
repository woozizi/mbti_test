import { format } from "date-fns";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import shareKakao from "../utils/shareKakao";

const TestResultItem = ({ result, isOwner, onVisibilityChange, onDelete }) => {
  const formatTime = format(new Date(result.date), "yyyy-MM-dd HH:mm:ss");
  return (
    <div className="p-4 mb-6 border rounded-lg bg-slate-700">
      <div className="flex justify-between items-center mb-2 pb-3 border-b border-white">
        <span className="text-white">{result.nickname}</span>
        <span className="text-sm text-white">{formatTime}</span>
      </div>

      <div className="mb-2">
        <span className="block text-yellow-500 font-semibold text-xl">
          {result.result}
        </span>
      </div>

      <div className="mb-4">
        <p className="text-white text-sm">
          {mbtiDescriptions[result.result] ||
            "해당 성격 유형에 대한 설명이 없습니다."}
        </p>
      </div>

      {isOwner && (
        <div className="flex justify-end space-x-2">
          <button
            onClick={() =>
              onVisibilityChange({
                id: result.id,
                visibility: !result.visibility,
              })
            }
            className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-white hover:text-blue-500"
          >
            {result.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button
            onClick={() => onDelete(result.id)}
            className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-white hover:text-red-500"
          >
            삭제
          </button>
          <button
            onClick={() => shareKakao(result)}
            className="px-2 py-1 text-sm bg-white text-black rounded hover:bg-white hover:text-red-500"
          >
            공유
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
