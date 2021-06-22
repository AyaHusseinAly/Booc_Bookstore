class BookstoresController < ApplicationController

    def allbookstores
        @bookstores = Bookstore.all()
        render :json => @bookstores
    end
    
    def show_bookstore_books
        @bookstore_books = BookstoreBook.find_by(bookstore_id:params[:id])
        render :json => @bookstore_books
  
      end

    def usable
    @poistion = []
        @stores = []
        @Bookstore.each do |bookstore|
            positionobj={
                lat: bookstore.lat,
                lng: bookstore.lng,
            }
            stores= {
                    id: bookstore.id,
                    name:bookstore.name,
                    phone: bookstore.phone, 
                    kind: bookstore.kind, 
                    img: bookstore.img,
                    created_at: bookstore.created_at,
                    updated_at: bookstore.updated_at, 
                    position: positionobj,
            }
            @stores.push(stores);
        end
        render :json =>{stores: @stores}
    end

    def search
        if params['bookName'] != "" && params['selectedOption'] == nil
            @Bookstore = Bookstore.where("name LIKE ?","%"+ params['bookName']+"%")
            @poistion = []
            @stores = []
            @Bookstore.each do |bookstore|
                positionobj={
                    lat: bookstore.lat,
                    lng: bookstore.lng,
                }
                stores= {
                      id: bookstore.id,
                      name:bookstore.name,
                      phone: bookstore.phone, 
                      kind: bookstore.kind, 
                      img: bookstore.img,
                      created_at: bookstore.created_at,
                      updated_at: bookstore.updated_at, 
                      position: positionobj,
                }
                @stores.push(stores);
            end
            render :json =>{stores: @stores}
        elsif params['bookName'] != "" && params['selectedOption'] != nil
            @Bookstore = Bookstore.where("name LIKE ?","%"+ params['bookName']+"%").where(kind: params['selectedOption'])
            #@Bookstore = Bookstore.where("name LIKE ?","%"+ params['bookName']+"%")
            @poistion = []
            @stores = []
            @Bookstore.each do |bookstore|
                positionobj={
                    lat: bookstore.lat,
                    lng: bookstore.lng,
                }
                stores= {
                      id: bookstore.id,
                      name:bookstore.name,
                      phone: bookstore.phone, 
                      kind: bookstore.kind, 
                      img: bookstore.img,
                      created_at: bookstore.created_at,
                      updated_at: bookstore.updated_at, 
                      position: positionobj,
                }
                @stores.push(stores);
            end
            render :json =>{stores: @stores}
        elsif params['bookName'] == "" && params['selectedOption'] != nil
            @Bookstore = Bookstore.where(kind: params['selectedOption'])
            @poistion = []
            @stores = []
            @Bookstore.each do |bookstore|
                positionobj={
                    lat: bookstore.lat,
                    lng: bookstore.lng,
                }
                stores= {
                    id: bookstore.id,
                    name:bookstore.name,
                    phone: bookstore.phone, 
                    kind: bookstore.kind, 
                    img: bookstore.img,
                    created_at: bookstore.created_at,
                    updated_at: bookstore.updated_at, 
                    position: positionobj,
                }
                @stores.push(stores);
            end
            render :json =>{stores: @stores}
        else
           render :json =>{stores: @stores}
           #render :json => {message:"hello from back", title:params['bookName'],kind:params['selectedOption'],distinct:params[ "distict"],sharemyLocation:params["sharemyLocation"]}
        end
    end

end
