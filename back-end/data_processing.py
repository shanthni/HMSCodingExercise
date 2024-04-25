import pandas as pd
import scanpy
import pandas


class DataLoader:
    def __init__(self):
        data = scanpy.datasets.pbmc3k_processed()
        self.coordinates = data.obsm["X_umap"]
        self.keys = data.obs_names

    def create_data_file(self):
        embedded_matrix = pandas.DataFrame(self.coordinates, columns=['x', 'y'])
        embedded_matrix['key'] = pd.Series(self.keys)
        embedded_matrix.to_json('./front-end/src/data/adata.json', orient="records")


if __name__ == "__main__":
    dl = DataLoader()
    dl.create_data_file()
 