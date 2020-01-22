module MainsHelper

    def image_url_from_active_storage
        ActiveStorage::Current.set(host: "http://localhost:3000/posts/1") do
            ActiveStorage::Blob.last.service_url
        end
    end

end
