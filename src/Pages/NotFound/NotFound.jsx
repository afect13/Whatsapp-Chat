import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-grow items-center justify-center min-h-vh-chat bg-gray-200">
      <div className="bg-white p-8  rounded shadow">
        <h2 className="text-2xl font-bold mb-4">404 - страница не найдена</h2>
        <p className="text-gray-700">Запрашиваемая страница не существует.</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
          Вернуться на главную страницу
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
