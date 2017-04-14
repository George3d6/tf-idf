
//Returns an array of maps(one for each document)
//The maps contains word(key) and nr. appearances(value)
function computeWordsDocumentsFrequency(documents) {
  let documentMaps = documents.map((document)=>{
    let documentMap = new Map();
    document.split(" ").forEach((rawWord)=>{
      let word = purgeWord(rawWord);
      let nrOfOccurances = documentMap.get(word);
      if(nrOfOccurances === undefined) {
        documentMap.set(word, 1);
      } else {
        documentMap.set(word, ++nrOfOccurances);
      }
    });
    return documentMap;
  });
  return documentMaps;
}

//Compute in how many of the documents each woerd accured
//Returns an occurance map with word(key) and nr. documents in which it appeared(value)
function computeWordOccuranceFrequency(documentsWordFrequencyMaps) {
  let occurancesMap = new Map();
  documentsWordFrequencyMaps.forEach((documentMap)=>{
    documentMap.forEach((nrOccurancesInDoc, word)=>
    {
        let nrOfOccurances = occurancesMap.get(word);
        if(nrOfOccurances === undefined) {
          occurancesMap.set(word, 1);
        } else {
          occurancesMap.set(word, ++nrOfOccurances);
        }
      }
    );
  });
  return occurancesMap;
}

//Based on an occurance map, the nr of documents and an idf weight function,
// compute the weight for each word
//Returns a map with word(key) and weight(value)
function computeWordsWeightMap(occurancesMap, nrOfDocuments, inverseDocumentFrequencyFunction) {
  let weightMap = new Map();
  occurancesMap.forEach((nrOfOccurances, word)=>{
    weightMap.set(word, inverseDocumentFrequencyFunction(nrOfDocuments,  nrOfOccurances));
  })
  return weightMap;
}

//Returns an array of importance maps (one for each documentMap)
//They contain word(key) and importance(value)
function computeDocumentWordImportanceMap(documentMaps, weightMap, textFrequencyWeightFunction) {
  let importanceMaps = [];
  documentMaps.forEach((documentMap)=>{
    let importanceMap = new Map();
    documentMap.forEach((nrOfOccurances, word)=>{
      let importance = textFrequencyWeightFunction(nrOfOccurances)*weightMap.get(word);
      importanceMap.set(word, importance);
    });
    importanceMaps.push(importanceMap);
  });
  return importanceMaps;
}

//Remove whitespaces, capitalization and other characters that might "slip into the word"
function purgeWord(str) {
  str = str.replace(" ", "");
  str = str.replace(",", "");
  str = str.toLowerCase();
  return str
}

module.exports = {
  computeWordsDocumentsFrequency : computeWordsDocumentsFrequency,
  computeWordOccuranceFrequency : computeWordOccuranceFrequency,
  computeWordsWeightMap : computeWordsWeightMap,
  computeDocumentWordImportanceMap : computeDocumentWordImportanceMap
}
