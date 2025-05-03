const FormField = ({ icon, label, name, value, onChange }) => {
    return (
        <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          {icon && <span className="text-blue-600">{icon}</span>}
          {label}
        </label>
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );

};
export default FormField;