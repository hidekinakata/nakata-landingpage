import React from "react";

interface ContentSectionType extends React.ComponentProps<"section"> {}

const ContentSection: React.FC<ContentSectionType> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={className + " w-full h-[90vh] pt-[10vh]"} {...props}>
      {children}
    </section>
  );
};

export default ContentSection;
