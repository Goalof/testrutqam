import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<script async src="https://usocial.pro/usocial/usocial.js?uid=9ea07854d3162f51&v=6.1.5" data-script="usocial" charset="utf-8"></script>
<div class="uSocial-Share" data-pid="7265c2d2ff7b2050d89da3239347e095" data-type="share" data-options="round-rect,style1,default,absolute,horizontal,size48,eachCounter0,counter0" data-social="pinterest,vk,ok,fb,twi" data-mobile="sms"></div>
`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});