const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1706817895~exp=1706818495~hmac=e6dda1da54e4d1c7c61ae0401f10b82f9bd26b97b259ab693c5b0804c908940f"
        alt="404 Error"
        className="w-64 h-64 mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800">Oops! Page not found</h1>
      <p className="text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default ErrorPage;
