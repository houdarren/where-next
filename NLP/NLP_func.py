def get_opportunities(word, data): 
    """
    word:
    data: list("id","title", "summary")
    """
    from nltk.tokenize import word_tokenize
    from gensim import corpora
    from gensim.utils import simple_preprocess
    from gensim.parsing.preprocessing import STOPWORDS
    from gensim.corpora.dictionary import Dictionary
    from sklearn.feature_extraction.text import TfidfVectorizer
    from sklearn.metrics.pairwise import cosine_similarity
    from sklearn.neighbors import NearestNeighbors

    STOPWORDS = set(STOPWORDS).union(set(['say', 'eat', 'drink']))
    def tokenizer(doc):
         return [token for token in simple_preprocess(doc) 
                 if token not in STOPWORDS]
    
    vect = TfidfVectorizer(
        tokenizer=tokenizer,
        analyzer='word',
        max_df=0.9,
        min_df=10,
    )
    antonyms = []
    synonyms = []
    set_syn = []
    
    for syn in wordnet.synsets(word):

        for l in syn.lemmas():

            synonyms.append(l.name())

            if l.antonyms():

                antonyms.append(l.antonyms()[0].name())


    set_syn = set(synonyms)

    opportunities = []
    for k in range(0, len(data)):
        for i in get_syn('education'):
            for j in data:
                if i in data[k][2]:
                    opportunities.append(j[0])
    data = pd.DataFrame(data)                
    # Document Term Matrices
    max_df = 2000
    dtm = vect.fit_transform((data[2]))


    # Get Word Counts for each document
    df_dtm = pd.DataFrame(dtm.todense(),
                          columns=vect.get_feature_names())
    # distance matrix
    dm = cosine_similarity(dtm)
    df_dm = pd.DataFrame(dm)
    
    # nearest distances from the 1st review to other reviews
    df_dm[0].nlargest(5)

    nn = NearestNeighbors(n_neighbors=10, 
                          algorithm='ball_tree')
    nn.fit(dtm)

    input_text = [word]
    dtm_input = vect.transform(input_text)
    nearest = nn.kneighbors(dtm_input.todense())

    for index in nearest[1][0]:
        opportunities.append(data.iloc[index][0])
  
    return set_syn,list(set(opportunities))