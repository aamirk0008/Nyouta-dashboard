import React from 'react'

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
      <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      <p className="mt-4 text-center text-gray-700 text-sm sm:text-base">Loading...</p>
    </div>
  </div>
  )
}

export default LoadingOverlay