import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `

<label class="form-control"> 
  <input class="form-control" type="file" name="data[file]" placeholder="Прикрепите файл" >
 	<span class="js-labelFile"> 
 		<span class="js-fileName">Прикрепить файл</span> 
 	</span> 
</label>
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