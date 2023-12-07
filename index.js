
// 1) Function that takes a name and returns a phrase with that name using string interpolation
function introduction(name) {
    return `Hi, my name is ${name}.`;
}
// 2) Function that takes a name and a language, and returns a phrase using those arguments
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// 3) Function that takes a name and a language (with default value JavaScript)
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// 4) Function that takes a name and a language, and allows overriding the default language
function introductionWithLanguageOptionalOverride(name, language = "JavaScript") {
  return `Hi, my name is ${name}  and I am learning to program in ${language}.`;
}
