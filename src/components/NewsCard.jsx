import { CiShare2 } from "react-icons/ci";
import { FaStar, FaRegEye } from "react-icons/fa";
import { MdOutlineBookmarks } from "react-icons/md";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { id, title, rating, total_view, author, image_url, details, tags } =
    news;
  return (
    <div className="rounded-lg bg-white overflow-hidden shadow">
      {/* Author */}
      <div className="flex items-center justify-between bg-base-200">
        <div className="flex items-center gap-3 px-4 py-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-sm">{author.name}</h4>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 px-4 ">
          <button className="text-gray-500 hover:text-primary">
            <MdOutlineBookmarks />
          </button>
          <button className="text-gray-500 hover:text-primary">
            <CiShare2 />
          </button>
        </div>
      </div>

      {/* Image */}
      <img src={image_url} alt={title} className="w-full h-64 object-cover" />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>

        <p className="text-sm text-gray-600 mb-3">
          {details.slice(0, 220)}...
          <Link to={`/news/${id}`} className="text-[#FF8C47] font-medium ml-1">
            Read More
          </Link>
        </p>

        {/* Tags (inline like original) */}
        <p className="text-xs text-gray-500 mb-3">
          Tag Cloud Tags:
          {tags.map((tag, i) => (
            <span key={i} className="ml-1">
              {tag},
            </span>
          ))}
        </p>

        <hr className="text-[#E7E7E7] my-5" />

        {/* Footer */}
        <div className="flex justify-between items-center">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-600 ml-1">{rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-500">
            <FaRegEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
