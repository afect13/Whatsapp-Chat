const AuthButton = ({ loading, nameButton }) => {
  return (
    <button
      disabled={loading}
      type="submit"
      className="text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full px-6 py-2.5 text-center"
    >
      {loading === true ? (
        <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 40 40" stroke="currentColor">
          <g fill="none" fillRule="evenodd">
            <g transform="translate(2 2)" strokeWidth="4">
              <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      ) : (
        `${nameButton}`
      )}
    </button>
  );
};

export default AuthButton;
