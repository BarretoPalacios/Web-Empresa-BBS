function CardServices({  icon, title, description, gradient }) {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    {/* Gradient Background */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
    
    {/* Card Content */}
    <div className="relative z-10 flex flex-col h-full p-8 bg-white/90 backdrop-blur-sm">
      {/* Icon with gradient */}
      <div className={`mb-6 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${gradient} text-white`}>
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      
      {/* Description */}
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      {/* CTA Button */}
      <a
        href="/services"
        className={`self-start px-6 py-2 rounded-full font-medium bg-gradient-to-r ${gradient} text-white hover:shadow-lg transition-all`}
      >
        Más información
      </a>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#3836FE] opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
  </div>
  );
}

export default CardServices;
