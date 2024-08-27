const OverViewCardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="bg-white dark:bg-dark-light-secondary p-3 md:p-5 "
      style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 8px' }}
    >
      {children}
    </div>
  );
};

export default OverViewCardContainer;
