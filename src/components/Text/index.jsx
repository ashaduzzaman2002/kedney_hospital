import React from "react";

const sizeClasses = {
  txtDMSansMedium18WhiteA70099: "font-dmsans font-medium",
  txtFredokaMedium40WhiteA700: "font-fredoka font-medium",
  txtDMSansRegular16WhiteA700: "font-dmsans font-normal",
  txtJostRomanMedium20Bluegray900: "font-jost font-medium",
  txtDMSansMedium24Bluegray700: "font-dmsans font-medium",
  txtDMSansRegular20: "font-dmsans font-normal",
  txtFredokaMedium32Indigo300: "font-fredoka font-medium",
  txtFredokaMedium16: "font-fredoka font-medium",
  txtDMSansMedium20Bluegray400: "font-dmsans font-medium",
  txtDMSansMedium24: "font-dmsans font-medium",
  txtFredokaMedium20: "font-fredoka font-medium",
  txtFredokaMedium24WhiteA700: "font-fredoka font-medium",
  txtDMSansRegular14Gray600: "font-dmsans font-normal",
  txtFredokaMedium24Bluegray700: "font-fredoka font-medium",
  txtDMSansBold16: "font-bold font-dmsans",
  txtDMSansMedium16Bluegray900: "font-dmsans font-medium",
  txtDMSansMedium16Bluegray700: "font-dmsans font-medium",
  txtDMSansRegular16Bluegray900: "font-dmsans font-normal",
  txtDMSansMedium16Gray600: "font-dmsans font-medium",
  txtDMSansRegular20WhiteA700: "font-dmsans font-normal",
  txtFredokaBold30: "font-bold font-fredoka",
  txtDMSansMedium18Gray600: "font-dmsans font-medium",
  txtFredokaMedium50: "font-fredoka font-medium",
  txtFredokaMedium32WhiteA700: "font-fredoka font-medium",
  txtFredokaSemiBold40: "font-fredoka font-semibold",
  txtCormorantGaramondBold40: "font-bold font-cormorantgaramond",
  txtDMSansRegular14WhiteA700: "font-dmsans font-normal",
  txtJostRomanMedium20: "font-jost font-medium",
  txtDMSansMedium18Bluegray900: "font-dmsans font-medium",
  txtFredokaRegular16: "font-fredoka font-normal",
  txtFredokaRegular14: "font-fredoka font-normal",
  txtFredokaMedium24Black900: "font-fredoka font-medium",
  txtCrimsonProRomanSemiBold40: "font-crimsonpro font-semibold",
  txtFredokaMedium40: "font-fredoka font-medium",
  txtDMSansRegular16Gray600: "font-dmsans font-normal",
  txtDMSansBold20: "font-bold font-dmsans",
  txtDMSansMedium16Bluegray400: "font-dmsans font-medium",
  txtFredokaMedium40Bluegray700: "font-fredoka font-medium",
  txtFredokaSemiBold18: "font-fredoka font-semibold",
  txtDMSansMedium20: "font-dmsans font-medium",
  txtFredokaMedium24: "font-fredoka font-medium",
  txtFredokaMedium32Black900: "font-fredoka font-medium",
  txtFredokaMedium20Bluegray900: "font-fredoka font-medium",
  txtDMSansRegular16Bluegray400: "font-dmsans font-normal",
  txtJostRegular13: "font-jost font-normal",
  txtDMSansMedium16: "font-dmsans font-medium",
  txtFredokaSemiBold24: "font-fredoka font-semibold",
  txtDMSansMedium14: "font-dmsans font-medium",
  txtCormorantGaramondBold60: "font-bold font-cormorantgaramond",
  txtDMSansMedium12: "font-dmsans font-medium",
  txtFredokaMedium32: "font-fredoka font-medium",
  txtFredokaSemiBold20: "font-fredoka font-semibold",
  txtDMSansRegular14: "font-dmsans font-normal",
  txtDMSansRegular16: "font-dmsans font-normal",
  txtDMSansMedium16WhiteA700: "font-dmsans font-medium",
  txtDMSansRegular18: "font-dmsans font-normal",
  txtDMSansMedium18: "font-dmsans font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
