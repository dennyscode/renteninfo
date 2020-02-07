class AddColumnPreviewToPosts < ActiveRecord::Migration[6.0]
  def change
     add_column :posts, :preview, :text
  end
end
