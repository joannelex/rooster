# import libraries
import pickle
import requests
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

import seaborn as sns
import xgboost as xgb
from sklearn.cluster import KMeans
from catboost import CatBoostClassifier
from lightgbm.sklearn import LGBMClassifier
from sklearn.tree import DecisionTreeClassifier
from xgboost import XGBClassifier
from sklearn.compose import ColumnTransformer, make_column_transformer
from sklearn.dummy import DummyClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.impute import SimpleImputer
from sklearn.impute import KNNImputer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    classification_report,
    confusion_matrix,
    f1_score,
    recall_score,
    precision_score,
    make_scorer,
    plot_confusion_matrix,
)
from sklearn.model_selection import (
    GridSearchCV,
    RandomizedSearchCV,
    cross_val_score,
    cross_validate,
    train_test_split,
)
from sklearn.pipeline import Pipeline, make_pipeline
from sklearn.preprocessing import OneHotEncoder, OrdinalEncoder, StandardScaler
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn import cluster, datasets, metrics
from sklearn.compose import ColumnTransformer, make_column_transformer
from sklearn.datasets import make_blobs
from sklearn.decomposition import PCA
from sklearn.pipeline import Pipeline, make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import NearestNeighbors

plt.style.use("seaborn")

# read spotify data and store as dataframe
spotify_df = pd.read_csv("spotify.csv")

# separate dataframe into features and labels
features = spotify_df.drop(columns = ["song_title", "artist"])
labels = spotify_df[["song_title", "artist"]]

# set keys
user_key = "user_id"
item_key = "track_id"

def get_stats(ratings, item_key="track_id", user_key="user_id"):
    print("Number of likes:", len(ratings))
    print("Average rating:  %0.3f" % (np.mean(ratings["like"])))
    N = len(np.unique(ratings[user_key]))
    M = len(np.unique(ratings[item_key]))
    print("Number of users (N): %d" % N)
    print("Number of items (M): %d" % M)
    print("Fraction non-nan ratings: %0.3f" % (len(ratings) / (N * M)))
    return N, M

N, M = get_stats(spotify_df)

item_mapper = dict(zip(np.unique(spotify_df[item_key]), list(range(M))))
user_mapper = dict(zip(np.unique(spotify_df[user_key]), list(range(N))))
user_inverse_mapper = dict(zip(list(range(N)), np.unique(spotify_df[user_key])))
item_inverse_mapper = dict(zip(list(range(M)), np.unique(spotify_df[item_key])))

def create_Y_from_ratings(data, N, M):
    Y = np.zeros((N, M))
    Y.fill(np.nan)
    for index, val in data.iterrows():
        n = user_mapper[val[user_key]]
        m = item_mapper[val[item_key]]
        Y[n, m] = val["like"]

    return Y

X = spotify_df.copy()
y = spotify_df[user_key]
X_train, X_valid, y_train, y_valid = train_test_split(
    X, y, test_size=0.25
)

print(X_train.shape, X_valid.shape)

train_mat = create_Y_from_ratings(X_train, N, M)
valid_mat = create_Y_from_ratings(X_valid, N, M)

def error(X1, X2):
    """
    Returns the root mean squared error.
    """
    return np.sqrt(np.nanmean((X1 - X2) ** 2))


def evaluate(pred_X, train_X, valid_X, model_name="Global average"):
    print("%s train RMSE: %0.2f" % (model_name, error(pred_X, train_X)))
    print("%s valid RMSE: %0.2f" % (model_name, error(pred_X, valid_X)))

avg = np.nanmean(train_mat)
pred_g = np.zeros(train_mat.shape) + avg
evaluate(pred_g, train_mat, valid_mat, model_name="Global average")

imputer = KNNImputer(n_neighbors=10)
train_mat_imp = imputer.fit_transform(train_mat)

item_user_mat = train_mat_imp.T

id_song_map = dict(zip(spotify_df.track_id, spotify_df.song_title))

def get_topk_recommendations(X, query_ind, metric="cosine", k=10):
    query_idx = item_inverse_mapper[query_ind]
    model = NearestNeighbors(n_neighbors=k, metric="cosine")
    model.fit(X)
    neigh_ind = model.kneighbors([X[query_ind]], k, return_distance=False).flatten()
    neigh_ind = np.delete(neigh_ind, np.where(query_ind == query_ind))
    recs = [id_song_map[item_inverse_mapper[i]] for i in neigh_ind]
    rec_artists = pd.DataFrame([spotify_df[spotify_df.track_id == i]["artist"].values[0] for i in neigh_ind])
    print("Query song: ", id_song_map[query_idx], " - ", spotify_df[spotify_df.track_id == query_idx]["artist"].values[0])

    recs = pd.DataFrame(data=recs)
    recs = pd.concat([recs, rec_artists], axis=1)
    recs.columns = ["Top Recommendations", "Artist"]
    print(recs)

get_topk_recommendations(item_user_mat, query_ind=297, metric="cosine", k=10)
print(id_song_map[297])

def get_data():
    r = requests.get(url = URL, params = PARAMS)

def post_data():
    r = requests.post("http://128.189.243.28/post", data={'foo': 'bar'})
    print(r.text)